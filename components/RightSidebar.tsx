import React from 'react'

const Rightsidebar = ({ user , transactions , banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
        <section className="flex flex-col pb-8">
            <div className="profile-banner" />
        </section>
    </aside>
  )
}

export default Rightsidebar