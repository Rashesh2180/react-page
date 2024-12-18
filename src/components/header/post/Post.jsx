import React from 'react'

const Post = () => {
  return (
    <div className=' mt-10'>
         <h1 className=" section-heading">
         Direct Post
      </h1>
      <div className=' overflow-x-auto'>
        <table className=' w-full border border-border-color'>
            <tr>
                <td className=' w-[20%] p-2 text-[13px] font-semibold text-primary capitalize border-r border-border-color'>Post URL
                </td>
                <td className='p-2  text-[13px]  text-primary'>https://nationalinjurybureau.leadspediatrack.com/post.do
                </td>
            </tr>
        </table>
      </div>
      
    </div>
  )
}

export default Post
