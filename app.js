/**
 * Dependencies
 */

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('module-alias/register');

const AppError = require('@root/utils/AppError');
const errorController = require('@root/controllers/errorController');

/**
 * Create Application
 */

const app = express();

/**
 * Global Middleware
 */

// Implement CORS
app.use(cors());
app.options('*', cors());

// Development logging
process.env.NODE_ENV === 'development' ? app.use(morgan('dev')) : null;

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// API Routes
// app.use('/api/v1/', publicRoutes);

// 404 Route
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorController);

module.exports = app;
