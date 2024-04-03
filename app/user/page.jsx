'use client';
import Button from '../../componets/form-button';
import dynamic from 'next/dynamic';
const DynamicButton = dynamic(() => import('../../componets/form-button'), { ssr: false });
export default function User() { 
    return (
        <DynamicButton/> 
    );
}
