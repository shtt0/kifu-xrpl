{
    "@context": "https://www.w3.org/ns/did/v1",
    "id": "did:xrpl:1:rhyYNdxAyFQ7s2KYXhaTMJKF7NrkkZj1X9",
    "authentication": [
        {
            "id": "keys-1",
            "type": "Ed25519VerificationKey2018",
            "controller": "did:xrpl:1:rhyYNdxAyFQ7s2KYXhaTMJKF7NrkkZj1X9",
            "publicKeyHex": "022D08E11894502E007D1EACFD4586EC59457AB55E6BC4028762BC17A6EC947EC0"
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
