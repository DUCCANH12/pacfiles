function FindProxyForURL(url, host) {
    // Danh sách proxy
    var proxyList = [
        "PROXY 123.18.234.178:8080",
        "PROXY 103.171.72.105:8888",
        "PROXY 113.160.132.158:6889",
        "PROXY 116.100.166.162:8080",
        "PROXY 160.19.78.70:3128",
        "PROXY 113.160.166.196:6101",
        "PROXY 103.21.148.0:22",
        "PROXY 27.64.163.40:13325"
    ];

    // Nếu có proxy trong danh sách thì chọn ngẫu nhiên
    if (proxyList.length > 0) {
        var randomIndex = Math.floor(Math.random() * proxyList.length);
        return proxyList[randomIndex] + "; DIRECT";
    }

    // Nếu không có proxy, dùng kết nối trực tiếp
    return "DIRECT";
}
