import {Selector} from 'TestCafe'

fixture `01 test suite`
    .page `https://devexpress.github.io/testcafe/example/`

test('01 test', async t => {
    await t.typeText ("#developer-name", "Manjunatha")
    await t.click ("#submit-button")
})