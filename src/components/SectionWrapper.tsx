

export default function SectionWrapper( props: { children: React.ReactNode } ) {
  return (
    <div className="min-h-screen "> { props.children} </div>
  )
}
