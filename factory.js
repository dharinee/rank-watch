
angular.module('app').factory("dataFactory", [
        function () {

            return {
                items :  [{ text : "Root Element Item",
                            children :  [
                                {
                                    text: "Item A",
                                    children: [
                                        {
                                            text: "Item A-1",
                                            children: [
                                                {
                                                    text: "Item A-1-1",
                                                    children : []
                                                }, {
                                                    text: "Item A-1-2",
                                                    children: [
                                                        {
                                                            text: "i added dis :D",
                                                            children : []
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            text: "Item A-2",
                                            children : []
                                        }, {
                                            text: "Item A-3",
                                            children : []
                                        },
                                    ]
                                }, {
                                    text: "Item B",
                                    children: [
                                        { text: "Item B-1",
                                            children : []},
                                        { text: "Item B-2" ,
                                            children : []},
                                        {
                                            text: "Item B-3",
                                            children: [
                                                { text: "Item B-3-1" },
                                                { text: "Item B-3-2" },
                                            ]
                                        }
                                    ]
                                }
                            ]}

            ]

            }
        }
    ])
