'use client'

const ADDRESS_CODES = [
  106, 97, 121, 119, 111, 111, 110, 103, 46, 106, 101, 111, 110, 103, 64, 107,
  97, 105, 115, 116, 46, 97, 99, 46, 107, 114,
]

function emailAddress() {
  return String.fromCharCode(...ADDRESS_CODES)
}

export function ObfuscatedEmailLink({
  className,
  label = 'Email me',
}: {
  className?: string
  label?: string
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        window.location.href = `mailto:${emailAddress()}`
      }}
    >
      {label}
    </button>
  )
}
