import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if(req.method === 'GET'){
        const mahasiswa = await prisma.mahasiswa.findMany()
        return res.status(200).json(mahasiswa)
    } else if (req.method === 'POST') {
        const{nama, nim, kelas} = req.body
        const newMahasiswa = await prisma.mahasiswa.create({
            data: {
                nama,
                nim,
                kelas
            },
        })
        return res.status(201).json(newMahasiswa)
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' })
    }
}