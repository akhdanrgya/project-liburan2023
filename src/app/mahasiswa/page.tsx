import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const getMahasiswa =async () => {
    const res = await prisma.mahasiswa.findMany({
        select:{
            nama: true,
            nim: true,
            kelas: true
        }
    })
    return res
}


const Mahasiswa = async() => {
    const mahasiswa = await getMahasiswa()
  return (
    <div>
        <h1>
            Mahasiswa Page
        </h1>

        <div>
            {mahasiswa.map((data,index) => (
                <>
                <p key={data.nama}>{index + 1}</p>
                <p>{data.nama}</p>
                <p>{data.nim}</p>
                <p>{data.kelas}</p>
                </>
            ))}
        </div>
    </div>
  )
}

export default Mahasiswa