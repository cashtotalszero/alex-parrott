import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
    href: string;
    children: any;
};

const NavLink = ({ href, children }: Props) => {
    const router = useRouter();

    let className = children.props.className || '';
    if (router.pathname === href) {
        className = 'selected';
    }

    return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

export default NavLink;
