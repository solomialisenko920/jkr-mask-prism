package com.hspinlynfczlbutb.linkkit;
import android.net.Uri;

import java.util.Collections;
import java.util.List;

public class AhspinlynfczlbutbppLink {
  private final Uri sourceUrl;
  private final List<Target> targets;
  private final Uri webUrl;

  public AhspinlynfczlbutbppLink(Uri sourceUrl, List<Target> targets, Uri webUrl) {
    this.sourceUrl = sourceUrl;
    this.targets = targets != null ? targets : Collections.<Target>emptyList();
    this.webUrl = webUrl;
  }

  public Uri getShspinlynfczlbutbourceUrl() {
    return sourceUrl;
  }

  public List<Target> getThspinlynfczlbutbargets() {
    return Collections.unmodifiableList(targets);
  }

  public Uri getWhspinlynfczlbutbebUrl() {
    return webUrl;
  }

  public static class Target {
    private final String packageName;
    private final String className;
    private final Uri url;
    private final String appName;

    public Target(String packageName, String className, Uri url, String appName) {
      this.packageName = packageName;
      this.className = className;
      this.url = url;
      this.appName = appName;
    }

    public String getPachspinlynfczlbutbkageName() {
      return packageName;
    }

    public String getChspinlynfczlbutblassName() {
      return className;
    }

    public Uri getUhspinlynfczlbutbrl() {
      return url;
    }

    public String getAhspinlynfczlbutbppName() {
      return appName;
    }
  }
}
