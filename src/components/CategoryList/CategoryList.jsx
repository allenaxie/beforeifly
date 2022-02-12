import { Layout, Tabs } from "antd";

export default function CategoryList({ categories, setActiveCateg }) {
    const { TabPane } = Tabs;

    const categs = categories.map((categ) =>
            <TabPane
                key={categ}
                tab={categ}
            >
            </TabPane>
    )

    function handleTabClick (key) {
        setActiveCateg(key);
    }

    return (
            <Tabs
                defaultActiveKey="0"
                className="category-tabs"
                centered
                onTabClick={handleTabClick}
                >
                <TabPane
                    tab={<span>All</span>}
                    key="All"
                >
                </TabPane>
                {categs}
            </Tabs>
    )
}