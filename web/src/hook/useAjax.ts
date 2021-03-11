import { useState, useEffect, useRef } from "react";
import { Specs } from "src/specs";
import { AppActions, useAppDispatch } from "src/app/state";

type UseAjax<D> = [
  AjaxResponse<D> | undefined,
  boolean,
  (request: AjaxRequest<D>) => void,
  (loading: boolean) => void,
];

export function useAjax<D>(initLoading: boolean = true): UseAjax<D> {
  const [request, setRequest] = useState<AjaxRequest<D>>();
  const [response, setResponse] = useState<AjaxResponse<D>>();
  const [loading, setLoading] = useState(initLoading);
  const appDispatch = useAppDispatch();

  async function doAjax(req: AjaxRequest<D>) {
    setLoading(true);
    try {
      const resp: Response = await fetch(req.url, req.config);
      const t = await resp.text();
      const d = t ? JSON.parse(t) : undefined;
      if (resp.ok) {
        setResponse({ ok: true, data: d });
      } else {
        setResponse({ ok: false, error: d });
        appDispatch(AppActions.ajaxError(d));
      }
    } catch (e) {
      appDispatch(AppActions.errorMsg((e as Error).message));
      throw e;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (request) {
      doAjax(request);
    }
  }, [request]);

  const timerHandlerRef = useRef<NodeJS.Timeout | null>(null);
  const ajax = (request: AjaxRequest<D>) => {
    if (timerHandlerRef.current) {
      clearTimeout(timerHandlerRef.current);
    }
    timerHandlerRef.current = setTimeout(() => {
      setRequest(request);
      timerHandlerRef.current = null;
    }, Specs.system.ajaxDebounceMs);
  };
  return [response, loading, ajax, setLoading];
}
