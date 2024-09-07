import React from 'react';
import { Layout, Menu, Card, Row, Col, Button } from 'antd';

const { Header, Content } = Layout;

const PloyMarketHome = () => {
    return (
        <Layout>
            <Header>
                <div style={{ color: 'white', fontSize: '24px' }}>Polymarket</div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">All</Menu.Item>
                    <Menu.Item key="2">Politics</Menu.Item>
                    <Menu.Item key="3">Crypto</Menu.Item>
                    <Menu.Item key="4">Sports</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="2024 Election Forecast" bordered={false}>
                                <Button type="primary">View</Button>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="2024 Presidential Election" bordered={false}>
                                <Button type="primary">Bet now</Button>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="U.S. Recession in 2024?" bordered={false}>
                                <Button type="primary">Bet now</Button>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{ marginTop: '20px' }}>
                        <Col span={8}>
                            <Card title="Presidential Election Winner 2024" bordered={false}>
                                <Button type="primary">Bet Yes</Button>
                                {/*// @ts-ignore*/}
                                <Button type="danger" style={{ marginLeft: '10px' }}>Bet No</Button>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Popular Vote Winner 2024" bordered={false}>
                                <Button type="primary">Bet Yes</Button>
                                {/*// @ts-ignore*/}
                                <Button type="danger" style={{ marginLeft: '10px' }}>Bet No</Button>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Tipping Point State in 2024 Election" bordered={false}>
                                <Button type="primary">Bet Yes</Button>
                                {/*// @ts-ignore*/}
                                <Button type="danger" style={{ marginLeft: '10px' }}>Bet No</Button>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    );
};

export default PloyMarketHome;
