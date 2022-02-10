import { Button, Layout, Tabs } from "antd";
import "./CategoryList.css";


export default function CategoryList({ categories, activeCateg, setActiveCateg }) {

    const { Header, Content } = Layout;
    const { TabPane } = Tabs;


    const categs = categories.map((categ, idx) =>
 
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
                onTabClick={handleTabClick}>
                <TabPane
                    tab={<span>All</span>}
                    key="All"
                >
                </TabPane>

                {categs}
            </Tabs>
            
            )
}