import {expect, test} from '@oclif/test'

describe('due', () => {
  test
  .stdout()
  .command(['due'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['due', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
