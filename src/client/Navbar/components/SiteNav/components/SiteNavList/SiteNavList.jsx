import SiteNavItem from '../SiteNavItem'
import SiteNavItems from '../SiteNavItems'

import styles from './SiteNavList.module.scss'

const SiteNavList = () => {
    const siteNav = [...SiteNavItems].map(item => <SiteNavItem {...item} /> )
    return (
        <ul className={styles.navigation}>
            {siteNav}
        </ul>
    )
}

export default SiteNavList;