export const copyToClipBoard = (text: string, copy: any, toast: any) => {
  copy(text)
  toast({
    title: "Skopiowano do schowka.",
    status: "info",
    duration: 2000,
    position: "top",
  })
}