package server.controller.monitoring;

import java.lang.management.ManagementFactory;

final class AppInfo {
    private final String version;
    private final long appStartTime;

    private AppInfo(String version, long appStartTime) {
        this.version = version;
        this.appStartTime = appStartTime;
    }

    static AppInfo getAppInfo() {
        String version = AppInfo.class.getPackage().getImplementationVersion();
        return new AppInfo(
                version != null ? version : "dev",
                ManagementFactory.getRuntimeMXBean().getStartTime()
        );
    }

    public String getVersion() {
        return version;
    }

    public long getAppStartTime() {
        return appStartTime;
    }
}
