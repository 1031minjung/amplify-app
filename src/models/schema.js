export const schema = {
    "models": {
        "Rx": {
            "name": "Rx",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "from": {
                    "name": "from",
                    "isArray": false,
                    "type": {
                        "enum": "RxFrom"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "purpose": {
                    "name": "purpose",
                    "isArray": false,
                    "type": {
                        "enum": "RxPurpose"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "odSph": {
                    "name": "odSph",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "odCyl": {
                    "name": "odCyl",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "odAxis": {
                    "name": "odAxis",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "odAdd": {
                    "name": "odAdd",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "odPrism": {
                    "name": "odPrism",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "odPrismBase": {
                    "name": "odPrismBase",
                    "isArray": false,
                    "type": {
                        "enum": "PrismBase"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "osSph": {
                    "name": "osSph",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "osCyl": {
                    "name": "osCyl",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "osAxis": {
                    "name": "osAxis",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "osAdd": {
                    "name": "osAdd",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "osPrism": {
                    "name": "osPrism",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "osPrismBase": {
                    "name": "osPrismBase",
                    "isArray": false,
                    "type": {
                        "enum": "PrismBase"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Rxes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Patient": {
            "name": "Patient",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "doctors": {
                    "name": "doctors",
                    "isArray": true,
                    "type": {
                        "model": "DoctorsPatients"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "patient"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Patients",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Doctor": {
            "name": "Doctor",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "licenseNum": {
                    "name": "licenseNum",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Patients": {
                    "name": "Patients",
                    "isArray": true,
                    "type": {
                        "model": "DoctorsPatients"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "doctor"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Doctors",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "DoctorsPatients": {
            "name": "DoctorsPatients",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "patient": {
                    "name": "patient",
                    "isArray": false,
                    "type": {
                        "model": "Patient"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "patientID"
                    }
                },
                "doctor": {
                    "name": "doctor",
                    "isArray": false,
                    "type": {
                        "model": "Doctor"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "doctorID"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "DoctorsPatients",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPatient",
                        "fields": [
                            "patientID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byDoctor",
                        "fields": [
                            "doctorID"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "PrismBase": {
            "name": "PrismBase",
            "values": [
                "UP",
                "DOWN",
                "IN",
                "OUT"
            ]
        },
        "RxPurpose": {
            "name": "RxPurpose",
            "values": [
                "DISTANCE",
                "NEAR",
                "INTERMEDIATE",
                "ALL"
            ]
        },
        "RxFrom": {
            "name": "RxFrom",
            "values": [
                "POL",
                "OLD_RX",
                "EYE_EXAM"
            ]
        }
    },
    "nonModels": {},
    "version": "403cb794e31a7427d132f752f61662d4"
};