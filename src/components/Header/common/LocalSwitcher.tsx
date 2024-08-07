"use client"
import React, { useState, useEffect } from 'react'
import { Button, Dropdown, Menu } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

interface LanguageOption {
    key: string
    label: string
}

const languageOptions: LanguageOption[] = [
    { key: 'uz', label: "O'zbek" },
    { key: 'ru', label: 'Русский' },
    { key: 'kr', label: 'Ўзбекча' },
]

const LocalSwitcher: React.FC = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [selectedLang, setSelectedLang] = useState<string>('uz')

    useEffect(() => {
        const currentLang = pathname.split('/')[1]
        if (languageOptions.some(option => option.key === currentLang)) {
            setSelectedLang(currentLang)
        }
    }, [pathname])

    const handleLanguageChange = (lang: string) => {
        const newPathname = '/' + lang + pathname.substring(3)
        router.push(newPathname)
    }

    const menu = (
        <Menu>
            {languageOptions.map((option) => (
                <Menu.Item key={option.key} onClick={() => handleLanguageChange(option.key)}>
                    {option.label}
                </Menu.Item>
            ))}
        </Menu>
    )

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <Button
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px 8px',
                    backgroundColor: '#4A90E2',
                    borderColor: '#ffffff',
                    borderRadius: '8px',
                }}
            >
                <GlobalOutlined style={{ color: 'white', fontSize: '18px', marginRight: '4px' }} />
                <span style={{ color: 'white', fontWeight: 'bold' }}>{selectedLang.toUpperCase() == 'KR' ? 'ЎЗ' : selectedLang.toUpperCase()}</span>
            </Button>
        </Dropdown>
    )
}

export default LocalSwitcher