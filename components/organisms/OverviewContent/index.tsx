import Category from "./category"
import TableRow from "./tableRow"

export default function OverviewContent() {
    return(
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            <Category nominal={300000} icon="icon-cat-dekstop">
                                Game
                                <br/>
                                Dekstop
                            </Category>
                            <Category nominal={540000} icon="icon-cat-mobile">
                                Game
                                <br/>
                                Mobile
                            </Category>
                            <Category nominal={210000} icon="icon-cat-other">
                                Others
                                <br/>
                                Categories
                            </Category>
                        </div>
                    </div>
                </div>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                    <div className="main-content main-content-table overflow-auto">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="color-palette-1">
                                    <th className="text-start" scope="col">Game</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow title="Mobile Legends: The New Battle 2021" category="Desktop" item={300} price={30000} status="Pending" image="overview-1"/>
                                <TableRow title="Mobile Legends: The New Battle 2021" category="Desktop" item={300} price={30000} status="Failed" image="overview-1"/>
                                <TableRow title="Mobile Legends: The New Battle 2021" category="Desktop" item={300} price={30000} status="Pending" image="overview-1"/>
                                <TableRow title="Mobile Legends: The New Battle 2021" category="Desktop" item={300} price={30000} status="Success" image="overview-1"/>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>        
    )
}