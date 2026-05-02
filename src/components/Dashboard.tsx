import supabase from "../lib/supabase-client.tsx";
import { useEffect } from "react";

const Dashboard = () => {

  const fetchMetrics = async () => {
    return supabase
    .from('sales_deals')
    .select(
      `
    name,
    value
    `,
    )
    .order('value', {ascending: false})
    .limit(1)
  }

  useEffect(() => {
    fetchMetrics().then(console.log)
  }, [])


  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
      </div>
    </div>
  )
}

export default Dashboard