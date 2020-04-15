import React, { ReactElement } from "react"

export default function GreetingText(): ReactElement {
  return (
    <div>
      <p>
        Hello, my name is <strong>Brian Monaccio!</strong>
      </p>
      <p>
        I&apos;m a <strong>full-stack web developer </strong> and{" "}
        <strong> JavaScript specialist</strong> living in Beacon, New York.
      </p>
    </div>
  )
}
