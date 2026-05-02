import supabase from "../lib/supabase-client.tsx";
import { useEffect, useState } from "react";

const Dashboard = () => {

  const [totalSales, setTotalSales] = useState(0)

  const fetchMetrics = async () => {
    return supabase
    .from('sales_deals')
    .select(
      `
    name,
    value.sum()
    `,
    )
  }

  useEffect(() => {
    fetchMetrics().then((res) => {
      const total = res.data?.reduce((acc, curr) => acc + curr.sum, 0)
      total && setTotalSales(total)
    })
  }, [])


  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($ {totalSales})</h2>
      </div>
    </div>
  )
}

export default Dashboard