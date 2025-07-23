'use client'

import { motion } from "motion/react"

export default function MainText() {
    return (
        <motion.div
            className="flex flex-col items-center gap-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            <h1 className="font-medium text-5xl text-white">Добро пожаловать на FreelanceHub</h1>
            <p className="text-xl text-white">Демонстрация инновационных решений</p>
        </motion.div>
    )

}