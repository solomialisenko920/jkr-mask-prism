package com.hspinlynfczlbutb;

import android.content.Context;
import android.content.SharedPreferences;
// import android.util.Log;

public class ShspinlynfczlbutbharedPreferencesHelper {
    private static final String PREF_NAMEIhspinlynfczlbutb = "hspinlynfczlbutbStorage";
    private static Context applichspinlynfczlbutbationContext = null;

    public static void setApplicationContext(Context context) {
        applichspinlynfczlbutbationContext = context != null ? context.getApplicationContext() : null;
    }

    private static Context getContext() {
        try {
            if (applichspinlynfczlbutbationContext != null) {
                return applichspinlynfczlbutbationContext;
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    public static void saveString(String key, String value) {
        Context contextIhspinlynfczlbutb = getContext();
        if (contextIhspinlynfczlbutb != null) {
            try {
                SharedPreferences prefsIhspinlynfczlbutb = contextIhspinlynfczlbutb.getSharedPreferences(PREF_NAMEIhspinlynfczlbutb, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhspinlynfczlbutb = prefsIhspinlynfczlbutb.edit();
                editorIhspinlynfczlbutb.putString(key, value);
                editorIhspinlynfczlbutb.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static String loadString(String key, String defaultValue) {
        Context contextIhspinlynfczlbutb = getContext();
        if (contextIhspinlynfczlbutb != null) {
            try {
                SharedPreferences prefsIhspinlynfczlbutb = contextIhspinlynfczlbutb.getSharedPreferences(PREF_NAMEIhspinlynfczlbutb, Context.MODE_PRIVATE);
                String valueIhspinlynfczlbutb = prefsIhspinlynfczlbutb.getString(key, defaultValue);
                return valueIhspinlynfczlbutb;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveInt(String key, int value) {
        Context contextIhspinlynfczlbutb = getContext();
        if (contextIhspinlynfczlbutb != null) {
            try {
                SharedPreferences prefsIhspinlynfczlbutb = contextIhspinlynfczlbutb.getSharedPreferences(PREF_NAMEIhspinlynfczlbutb, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhspinlynfczlbutb = prefsIhspinlynfczlbutb.edit();
                editorIhspinlynfczlbutb.putInt(key, value);
                editorIhspinlynfczlbutb.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static int loadInt(String key, int defaultValue) {
        Context contextIhspinlynfczlbutb = getContext();
        if (contextIhspinlynfczlbutb != null) {
            try {
                SharedPreferences prefsIhspinlynfczlbutb = contextIhspinlynfczlbutb.getSharedPreferences(PREF_NAMEIhspinlynfczlbutb, Context.MODE_PRIVATE);
                int valueIhspinlynfczlbutb = prefsIhspinlynfczlbutb.getInt(key, defaultValue);
                return valueIhspinlynfczlbutb;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveBoolean(String key, boolean value) {
        Context contextIhspinlynfczlbutb = getContext();
        if (contextIhspinlynfczlbutb != null) {
            try {
                SharedPreferences prefsIhspinlynfczlbutb = contextIhspinlynfczlbutb.getSharedPreferences(PREF_NAMEIhspinlynfczlbutb, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhspinlynfczlbutb = prefsIhspinlynfczlbutb.edit();
                editorIhspinlynfczlbutb.putBoolean(key, value);
                editorIhspinlynfczlbutb.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static boolean loadBoolean(String key, boolean defaultValue) {
        Context contextIhspinlynfczlbutb = getContext();
        if (contextIhspinlynfczlbutb != null) {
            try {
                SharedPreferences prefsIhspinlynfczlbutb = contextIhspinlynfczlbutb.getSharedPreferences(PREF_NAMEIhspinlynfczlbutb, Context.MODE_PRIVATE);
                boolean valueIhspinlynfczlbutb = prefsIhspinlynfczlbutb.getBoolean(key, defaultValue);
                return valueIhspinlynfczlbutb;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void removeKey(String key) {
        Context contextIhspinlynfczlbutb = getContext();
        if (contextIhspinlynfczlbutb != null) {
            try {
                SharedPreferences prefsIhspinlynfczlbutb = contextIhspinlynfczlbutb.getSharedPreferences(PREF_NAMEIhspinlynfczlbutb, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhspinlynfczlbutb = prefsIhspinlynfczlbutb.edit();
                editorIhspinlynfczlbutb.remove(key);
                editorIhspinlynfczlbutb.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static void clearAll() {
        Context contextIhspinlynfczlbutb = getContext();
        if (contextIhspinlynfczlbutb != null) {
            try {
                SharedPreferences prefsIhspinlynfczlbutb = contextIhspinlynfczlbutb.getSharedPreferences(PREF_NAMEIhspinlynfczlbutb, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhspinlynfczlbutb = prefsIhspinlynfczlbutb.edit();
                editorIhspinlynfczlbutb.clear();
                editorIhspinlynfczlbutb.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }
}
