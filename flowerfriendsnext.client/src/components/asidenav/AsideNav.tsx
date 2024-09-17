
import { Box, Link, Separator } from '@radix-ui/themes';

import './asidenav.scss';

const AsideNav = () => {
    return (
        <Box width="300px" className="aside-nav">
            <Link href="/users/1">Profile</Link>
            <Separator orientation="horizontal" size="4" />
            <Link href="/flowerfriends">Profile</Link>
        </Box>
    );
}

export default AsideNav;