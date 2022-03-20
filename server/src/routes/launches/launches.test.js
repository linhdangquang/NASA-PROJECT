import request from 'supertest';
import 'babel-polyfill';
import app from '../../app';
describe('Test GET /launches', () => {
  test('It should response with 200 success', async () => {
    const response = await request(app)
      .get('/launches')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('Test POST /launches', () => {
  const completeLaunchData = {
    mission: 'test',
    rocket: 'test',
    target: 'test',
    launchDate: 'Jan 1, 2029',
  };

  const launchDataWithoutDate = {
    mission: 'test',
    rocket: 'test',
    target: 'test',
  };

  const launchDataWithInvalidDate = {
    mission: 'test',
    rocket: 'test',
    target: 'test',
    launchDate: 'xzxzxz',
  };
  test('It should response with 201 success', async () => {
    const response = await request(app)
      .post('/launches')
      .send(completeLaunchData)
      .expect('Content-Type', /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);

    expect(response.body).toMatchObject(launchDataWithoutDate);
  });

  test('It should catch missing property', async () => {
    const response = await request(app)
      .post('/launches')
      .send(launchDataWithoutDate)
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: 'Bad Request',
    });
  });
  test('Invalid date', async () => {
    const response = await request(app)
      .post('/launches')
      .send(launchDataWithInvalidDate)
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: 'Invalid Date',
    });
  });
});
