package de.appplant.cordova.plugin.localnotification;

public class OSLCNOError extends OSLCNOPluginMessage {

    public OSLCNOError(String code, String message) {
        super(code, message);
    }

    static final OSLCNOError EXACT_PERMISSION =
            new OSLCNOError("OSLCNO-001","Unable to schedule an exact alarm due to lack of permissions.");

}
