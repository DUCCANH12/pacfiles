function FindProxyForURL(url, host) {
    var proxyList = [
        "PROXY 113.160.184.87:8080",
        "PROXY 116.107.190.68:1080",
        "PROXY 116.59.9.239:10003",
        "PROXY 1.54.172.229:16000",
        "PROXY 1.52.198.150:16000"
    ];
    if (proxyList.length > 0) {
        var randomIndex = Math.floor(Math.random() * proxyList.length);
        return proxyList[randomIndex];
    }
    return "DIRECT";
}
