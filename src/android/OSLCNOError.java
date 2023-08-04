package de.appplant.cordova.plugin.localnotification;

import org.json.JSONException;
import org.json.JSONObject;

public class OSLCNOError {

    private final String code;
    private final String message;

    public String getCode() { return code; }
    public String getMessage() { return message; }

    public OSLCNOError(String code, String message) {
        this.code = code;
        this.message = message;
    }

    static OSLCNOError EXACT_PERMISSION_ERROR =
            new OSLCNOError("OSLCNO-001","Unable to schedule an exact alarm due to lack of permissions.");

    static OSLCNOError EXACT_PERMISSION_WARNING =
            new OSLCNOError("OSLCNO-002","Unable to schedule an exact alarm due to lack of permissions. We scheduled it as an inexact alarm instead.");

    public JSONObject toJSONObject() {
        JSONObject jsonResult = new JSONObject();
        try {
            jsonResult.put("code", code);
            jsonResult.put("message", message);
            return jsonResult;
        } catch (JSONException e) {
            // should never happen
            return null;
        }
    }

}
