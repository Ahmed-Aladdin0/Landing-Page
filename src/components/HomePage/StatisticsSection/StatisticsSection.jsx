import React from "react";

export default function StatisticsSection() {
    const statisticsItems = [
        { id:1, title:"35+", description:"Cities Using Citio" },
        { id:2, title:"2.4M+", description:"Active Residents" },
        { id:3, title:"45k+", description:"Service Providers" },
        { id:4, title:"92%", description:"Satisfaction Rate" },
    ];

    return (
        <div
            style={{
                background: '#2563eb',
                padding: '54px 0 44px 0',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    {statisticsItems.map((item) => (
                        <div
                            key={item.id}
                            className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0 d-flex justify-content-center"
                        >
                            <div className="text-center">
                                <div
                                    style={{
                                        fontSize: '2.3rem',
                                        fontWeight: 800,
                                        letterSpacing: 0.5,
                                        color: '#fff',
                                        marginBottom: 8
                                    }}
                                >
                                    {item.title}
                                </div>
                                <div
                                    style={{
                                        fontSize: '1.1rem',
                                        color: '#e3e7f0',
                                        letterSpacing: 0.1,
                                        fontWeight: 500,
                                        minHeight: 33
                                    }}
                                >
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}