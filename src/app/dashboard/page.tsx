import Sidebar from "@/components/dashboard/Sidebar"


const dashboard = () => {
    return(
        <div className="flex">
            <Sidebar/>
            <h1>
                Dashboard Page
            </h1>
        </div>
    )
}

export default dashboard