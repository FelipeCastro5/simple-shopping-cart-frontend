//import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useLayoutTitle } from "../../context/LayoutTitleContext"
import TablaProductos from "@/components/items/table"

export default function MainMenu() {
    //  const navigate = useNavigate()
    const { setTitle } = useLayoutTitle()

    useEffect(() => {
        setTitle(<>MENU PRINCIPAL</>)
    }, [])

    return (
        <div className="w-full max-w-3xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <TablaProductos />
            </div>
        </div>
    )
}
