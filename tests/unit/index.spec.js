describe("测试工具函数ADD方法", function () {
  it("参数为字符串的时候", function () {
    expect(add("1")).toBe(2)
  })
  it("参数为数字的时候", function () {
    expect(add(2)).toBe(3)
  })
  it("参数为3的时候", function () {
    expect(add(3)).toBe(4)
  })
})
