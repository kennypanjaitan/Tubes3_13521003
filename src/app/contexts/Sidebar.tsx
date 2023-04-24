const Sidebar = (): JSX.Element => {
    return (
        <div className="absolute w-sidebar h-full bg-sidebar-bg left-0">
            {/* Title */}
            <div className="flex items-center justify-center h-20">
                <div className="mt-20 text-text-color text-[64px] font-day ">BKE</div>
            </div>

            <div className="relative top-[650px] h-2.5 bg-primary-bg"></div>

        </div>
    )

}

export default Sidebar