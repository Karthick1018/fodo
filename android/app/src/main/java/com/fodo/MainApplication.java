package com.fodo;

import android.app.Application;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.soloader.SoLoader;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost =
        new DefaultReactNativeHost(this) {
            @Override
            public boolean getUseDeveloperSupport() {
                return BuildConfig.DEBUG;
            }

            @Override
            protected List<ReactPackage> getPackages() {
                @SuppressWarnings("UnnecessaryLocalVariable")
                List<ReactPackage> packages = new PackageList(this).getPackages();

                // Add code for generating key hash here
                try {
                    android.content.pm.PackageInfo info = getPackageManager().getPackageInfo(
                            "com.fodo",  // Replace with your app's package name
                            android.content.pm.PackageManager.GET_SIGNATURES);
                    for (android.content.pm.Signature signature : info.signatures) {
                        java.security.MessageDigest md = java.security.MessageDigest.getInstance("SHA");
                        md.update(signature.toByteArray());
                        android.util.Log.d("KeyHash:", android.util.Base64.encodeToString(md.digest(), android.util.Base64.DEFAULT));
                    }
                } catch (android.content.pm.PackageManager.NameNotFoundException e) {
                    e.printStackTrace();
                } catch (java.security.NoSuchAlgorithmException e) {
                    e.printStackTrace();
                }

                return packages;
            }

            @Override
            protected String getJSMainModuleName() {
                return "index";
            }

            @Override
            protected boolean isNewArchEnabled() {
                return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
            }

            @Override
            protected Boolean isHermesEnabled() {
                return BuildConfig.IS_HERMES_ENABLED;
            }
        };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            // If you opted-in for the New Architecture, we load the native entry point for this app.
            DefaultNewArchitectureEntryPoint.load();
        }
        ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
    }
}
