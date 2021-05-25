import SiteNavItem from '../SiteNavItem'
import SiteNavItems from '../SiteNavItems'

const SiteNavList = () => {
    const siteNav = [...SiteNavItems].map(item => <SiteNavItem {...item} /> )
    return (
        <ul>
            {siteNav}
        </ul>
    )
}

export default SiteNavList;