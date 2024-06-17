{
    "@context": "https://www.w3.org/ns/did/v1",
    "id": "did:xrpl:1:rp4vJob3KgqqrhBNUbWs5U4PGKgdgyGVmu",
    "authentication": [
        {
            "id": "keys-1",
            "type": "Ed25519VerificationKey2018",
            "controller": "did:xrpl:1:rp4vJob3KgqqrhBNUbWs5U4PGKgdgyGVmu",
            "URI": "did:xrpl:1:rp4vJob3KgqqrhBNUbWs5U4PGKgdgyGVmu",
            "publicKeyHex": "02F01C2B9203005879B2AAF9C1BC74495389D978EFBE966397E0715FE7BC3F590F"
        }
    ],
    "service": [{
        "id": "graduated",
        "type": "GraduationCredential",
        "serviceEndpoint": {
            "graduateOf": "University of Tokyo",
            "department": "Law",
            "year": 2024,
            "profileLink": "https://www.u-tokyo.ac.jp/ja/index.html"
        }
    }],
    "graduateAddress": "rp4vJob3KgqqrhBNUbWs5U4PGKgdgyGVmu"
}
