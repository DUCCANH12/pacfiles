// proxy.pac - dùng cho Zero Omega / Chrome (chỉ HTTP proxies)
// Chú ý: các dòng SOCKS4 trong danh sách ban đầu bị bỏ ra — PAC này chỉ chứa HTTP proxies.

(function() {
    // DANH SÁCH HTTP PROXIES (lấy từ list bạn cung cấp; đã loại trùng lặp)
    var proxyList = [
        "PROXY 14.225.240.23:8562",
        "PROXY 116.105.72.60:10008",
        "PROXY 116.105.9.239:10003",
        "PROXY 118.69.111.112:8080",
        "PROXY 27.72.244.228:8080",
        "PROXY 222.252.194.29:8080",
        "PROXY 118.69.183.149:8080",
        "PROXY 14.161.33.150:8080",
        "PROXY 14.241.80.37:8080",
        "PROXY 1.54.172.229:16000",
        "PROXY 1.52.198.221:16000",
        "PROXY 1.52.198.150:16000"
    ];

    // Chọn 1 proxy NGẪU NHIÊN MỖI LẦN PAC ĐƯỢC GỌI (mỗi request có thể khác nhau).
    // Nếu bạn muốn "chọn 1 lần khi load profile và giữ nguyên cho session",
    // báo cho mình đổi thành _selectedProxy pattern (mình đã viết phiên bản khác ở dưới).
    function FindProxyForURL(url, host) {
        if (proxyList.length === 0) return "DIRECT";

        // Loại bỏ host cục bộ / intranet khỏi proxy (nếu cần)
        // Tránh gửi các host nội bộ qua proxy:
        if (isPlainHostName(host) || shExpMatch(host, "*.local") || dnsDomainIs(host, "localhost")) {
            return "DIRECT";
        }

        // Domain cụ thể muốn luôn DIRECT (vì một số trang không tương thích với proxy)
        var directDomains = [
            "localhost",
            "127.0.0.1",
            "0.0.0.0"
        ];
        for (var i = 0; i < directDomains.length; i++) {
            if (dnsDomainIs(host, directDomains[i])) return "DIRECT";
        }

        // Chọn ngẫu nhiên 1 proxy từ danh sách
        var idx = Math.floor(Math.random() * proxyList.length);
        // Thử proxy đã chọn; nếu fail thì fallback DIRECT
        return proxyList[idx] + "; DIRECT";
    }

    // Xuất hàm ra global
    this.FindProxyForURL = FindProxyForURL;
})();
