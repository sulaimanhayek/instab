function updateBlockingRule() {
    const now = new Date();
    const hour = now.getHours();
  
    const shouldBlock = hour >= 9 && hour < 23;
  
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: shouldBlock ? ["ruleset_1"] : [],
      disableRulesetIds: shouldBlock ? [] : ["ruleset_1"]
    });
  }
  
  // Run on startup
  updateBlockingRule();
  
  // Check every 15 minutes
  chrome.alarms.create('checkTime', { periodInMinutes: 15 });
  chrome.alarms.onAlarm.addListener(updateBlockingRule);