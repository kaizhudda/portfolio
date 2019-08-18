import React from "react"
import styled from "styled-components"

const SideNavigation = () => {
  return (
    <SideNav>
      About Us
    </SideNav>
  )
}

export default SideNavigation

const SideNav = styled.div`
    background-color: #282830;
    width: 225px;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    overflow: auto;
    z-index: 99;
    overflow-x: hidden;
`