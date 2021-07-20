import numpy as np

class LogisticRegression:
    def __init__(self, learning_rate=0.005, gamma=0.9, n_iters=500):
        self.lr = learning_rate
        self.gamma = gamma
        self.n_iters = n_iters
        self.weights = None
        self.bias = None
        self.e_h = []

    def fit(self, X, y):
        n_samples, n_features = X.shape

        # init parameters
        self.weights = np.zeros(n_features)
        self.bias = 0
        v_w = np.zeros(n_features)
        v_b = 0
        # gradient descent
        for _ in range(self.n_iters):
            # approximate y with linear combination of weights and x, plus bias
            linear_model = np.dot(X, self.weights) + self.bias
            # apply sigmoid function
            y_predicted = self._sigmoid(linear_model)

            # compute gradients
            dw = np.dot(X.T, (y_predicted - y))
            db = np.sum(y_predicted - y)
            
            # momentum
            v_w = self.gamma * v_w + self.lr * dw 
            v_b = self.gamma * v_b + self.lr * db
            
            # update parameters
            self.weights -= v_w
            self.bias -= v_b
            self.e_h.append(self.error(X, y))

    def predict(self, X):
        linear_model = np.dot(X, self.weights) + self.bias
        y_predicted = self._sigmoid(linear_model)
        y_predicted_cls = [1 if i > 0.5 else 0 for i in y_predicted]
        return np.array(y_predicted_cls)

    def _sigmoid(self, x):
        return 1 / (1 + np.exp(-x))
    
    def error(self, X, y):
        linear_model = np.dot(X, self.weights) + self.bias
        y_predicted = self._sigmoid(linear_model)
        err = 0.5 * sum((y_predicted - y) ** 2)
        return err
