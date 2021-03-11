interface AjaxSuccess<D> {
  ok: true;
  data: D;
}

interface AjaxFailure {
  ok: false;
  error: AjaxError;
}

type AjaxResponse<D> = AjaxSuccess<D> | AjaxFailure;

interface AjaxRequest<D> {
  url: string;
  config: RequestInit;
}

type AjaxError = {
  timestamp: number,
  path: string,
  status: number,
  error: string,
  message: string,
  requestId: string,
};
