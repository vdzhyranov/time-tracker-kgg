import React from 'react';
import {Link} from 'react-router-dom'

type LinksType = {
    slug: string,
    name: string
}

type headerProps = {
    links: LinksType[]
}


const Header = ({links}: headerProps) => {
    return (
        <div className='px-10 mb-8 bg-slate-200'>
            <div className='container border-b w-full inline-block border-blue-400 py-8'>
                <div className='float-left text-blue ml-4 font-bold  text-3xl'>
                    V.DZHY
                </div>
                <div className='float-left contents'>
                    {links.map(link => (
                        <Link to={link.slug} key={link.slug}>
                            <span className='float-right mt-2 align-middle text-blue ml-4 font-bold cursor-pointer'>
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;