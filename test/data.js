import assert from 'node:assert/strict'
import test from 'node:test'
import {unified} from 'unified'

test('`data`', async function (t) {
  await t.test('should return self as setter', async function () {
    const processor = unified()

    assert.equal(processor.data('foo', 'bar'), processor)
  })

  await t.test('should yield data as getter (not defined)', async function () {
    assert.equal(unified().data('foo'), null)
  })

  await t.test('should yield data as getter (defined)', async function () {
    assert.equal(unified().data('foo', 'bar').data('foo'), 'bar')
  })

  await t.test('should not yield data prototypal fields', async function () {
    assert.equal(unified().data('toString'), null)
  })

  await t.test('should yield dataset as getter w/o key', async function () {
    assert.deepEqual(unified().data('foo', 'bar').data(), {foo: 'bar'})
  })

  await t.test('should set dataset as setter w/o key (#1)', async function () {
    const processor = unified().data('foo', 'bar')

    assert.equal(processor.data({baz: 'qux'}), processor)
    assert.deepEqual(processor.data(), {baz: 'qux'})
  })

  await t.test('should set dataset as setter w/o key (#2)', async function () {
    assert.deepEqual(unified().data('foo', 'bar').data({baz: 'qux'}).data(), {
      baz: 'qux'
    })
  })
})
