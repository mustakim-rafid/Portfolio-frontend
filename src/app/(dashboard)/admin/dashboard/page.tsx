import { cookies } from "next/headers"

const DashboardHomePage = async () => {
  const token = (await cookies()).get("accessToken")
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/admin`, {
    headers: {
      'Cookie': `${token?.name}=${token?.value}`
    },
    cache: "no-store"
  })
  const {data} = await res.json()

  return (
    <div className="flex justify-center items-center">
      <h1 className="text-xl">Welcome, <span className="font-semibold">{data.name}</span></h1>
    </div>
  )
}

export default DashboardHomePage