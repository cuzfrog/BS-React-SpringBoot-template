package server.controller.monitoring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/heath")
@RestController
final class HealthController {

    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }

    @GetMapping("/info")
    public AppInfo info() {
       return AppInfo.getAppInfo();
    }
}
