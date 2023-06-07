import React from "react"
import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
      <div className="about text-center p-5">
        <h1>About this Project</h1>
        <p>Created by: Roi Efraim</p>
        <p>
          <a href="/">Back to HomePage</a>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
