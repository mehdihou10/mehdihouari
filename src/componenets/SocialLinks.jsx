import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


const SocialLinks = () => {
  return (
    <div className="social-links flex gap-[10px]">
    <a className='w-[40px] h-[40px] rounded-full text-[28px]
    flex justify-center items-center duration-[0.4s] hover:bg-[#212d45] hover:scale-[1.2]' href="https://github.com/mehdihou10" target='__blank'><AiFillGithub /></a>
    
    <a className='w-[40px] h-[40px] rounded-full text-[28px]
    flex justify-center items-center duration-[0.4s] hover:bg-[#212d45] hover:scale-[1.2]' href="https://www.linkedin.com/in/mehdi-houari-001115256/" target='__blank'><AiFillLinkedin /></a>
    
    <a className='w-[40px] h-[40px] rounded-full text-[28px]
    flex justify-center items-center duration-[0.4s] hover:bg-[#212d45] hover:scale-[1.2]' href="https://www.instagram.com/mehdi_hou_10/?igshid=ZDdkNTZiNTM%3D" target='__blank'><AiFillInstagram /></a>

  </div>
  )
}

export default SocialLinks
